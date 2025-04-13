import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContact,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessageById(id: number): Promise<ContactMessage | undefined>;
  markMessageAsRead(id: number): Promise<boolean>;
  
  // Newsletter subscription methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Contact message methods
  async createContactMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const now = new Date();
    const [message] = await db.insert(contactMessages)
      .values({
        ...insertMessage,
        createdAt: now,
        isRead: false
      })
      .returning();
    
    // Log for debug purposes
    console.log("New contact message saved:", message);
    
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getContactMessageById(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db
      .select()
      .from(contactMessages)
      .where(eq(contactMessages.id, id));
    
    return message || undefined;
  }

  async markMessageAsRead(id: number): Promise<boolean> {
    const result = await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id));
    
    return result.count > 0;
  }

  // Newsletter subscription methods
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = await this.getSubscriberByEmail(insertSubscriber.email);
    if (existingSubscriber) {
      return existingSubscriber;
    }
    
    const now = new Date();
    const [subscriber] = await db
      .insert(subscribers)
      .values({
        ...insertSubscriber,
        createdAt: now
      })
      .returning();
    
    return subscriber;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email));
    
    return subscriber || undefined;
  }
}

// Exportation de l'implémentation de stockage en base de données
export const storage = new DatabaseStorage();
