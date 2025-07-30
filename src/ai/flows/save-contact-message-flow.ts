'use server';
/**
 * @fileOverview A flow to save a contact message to Firestore.
 * - saveContactMessage - Saves a contact message to the 'contacts' collection.
 * - ContactMessageSchema - The Zod schema for the contact message.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import * as admin from 'firebase-admin';
import {getApps} from 'firebase-admin/app';

// Initialize Firebase Admin SDK if not already initialized
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

export const ContactMessageSchema = z.object({
  name: z.string().describe('Full name of the person sending the message.'),
  email: z.string().email().describe('Email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});

export type ContactMessage = z.infer<typeof ContactMessageSchema>;

export async function saveContactMessage(
  input: ContactMessage
): Promise<{success: boolean}> {
  return saveContactMessageFlow(input);
}

const saveContactMessageFlow = ai.defineFlow(
  {
    name: 'saveContactMessageFlow',
    inputSchema: ContactMessageSchema,
    outputSchema: z.object({success: z.boolean()}),
  },
  async (input) => {
    try {
      await db.collection('contacts').add({
        ...input,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      return {success: true};
    } catch (error) {
      console.error('Error saving contact message to Firestore:', error);
      // In a real app, you'd want more robust error handling here.
      return {success: false};
    }
  }
);
