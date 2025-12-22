import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });

        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        console.error('Error saving contact:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
