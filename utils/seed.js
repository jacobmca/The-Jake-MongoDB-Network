const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.once('open', async () => {
    try {
        console.log('Connected to the database.');

        // Drop existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // Insert sample data
        const createdUsers = await User.insertMany(users);
        const createdThoughts = await Thought.insertMany(thoughts);

        console.log('Sample data inserted successfully!');

        // Optional linking thoughts to users
        for (let i = 0; i < createdThoughts.length; i++) {
            const thought = createdThoughts[i];
            const user = createdUsers.find((u) => u.username === thought.username);

            if (user) {
                user.thoughts.push(thought._id);
                await user.save();
            }
        }

        console.log('Thoughts linked to users successfully!');
    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        connection.close();
    }
});

// To run seed script: node utils/seed.js