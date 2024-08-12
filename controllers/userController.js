const { Thought, User } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Get a single user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends');
  
        if (!user) {
          return res.status(404).json({ message: 'No user found with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Post a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json({ message: 'User created!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Update a user by ID
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate (
                { _id: req.params.userId },
                { $set: req.body },
                { new: true, runValidators: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
    
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user by ID
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID!'});
            }

            // Remove user's thoughts from the Thought collection
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
        
            res.json({ message: "User and associated thoughts deleted!"});
            } catch (err) {
            res.status(500).json(err);
            }
    },
  };