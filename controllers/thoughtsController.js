const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Get a single thought
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought found with that ID' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Create a thought
    async createThought(req, res) {
      try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
  
        if (!user) {
          return res
            .status(404)
            .json({ message: 'Thought created, but no user with this ID' });
        }
  
        res.json({ message: 'Thought created!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Update a thought by ID
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate (
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true, runValidators: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts found with this id!' });
            }
    
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a thought by ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID!'});
            }

            // Remove thought from the associated user's thoughts array
            const user = await User.findOneAndUpdate (
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId}},
                { new: true }
            );
    
            if (!user) {
                return res.status(404).json({ message: 'Thought deleted, but no user with this ID' });
            }
        
            res.status(200).json("Thought successfully deleted!");
            } catch (err) {
            res.status(500).json(err);
            }
    },

    // Add Reaction
    async addReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: req.body } },
          { new: true, runValidators: true }
        );
    
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
    
        res.json(thought);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    
    // Remove Reaction
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { new: true }
        );
    
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
    
        res.json(thought);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
    
  };
  