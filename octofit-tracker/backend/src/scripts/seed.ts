import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Workout from '../models/Workout';
import Leaderboard from '../models/Leaderboard';

/**
 * Seed the octofit_db database with test data
 * 
 * This script initializes the OctoFit Tracker database with realistic sample data
 * including users, teams, activities, workouts, and leaderboard entries.
 */

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seed...');
    console.log(`📍 Connecting to: ${MONGODB_URI}`);

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('\n🗑️  Clearing existing collections...');
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});
    await Leaderboard.deleteMany({});
    console.log('✅ Collections cleared');

    // Create Users
    console.log('\n👥 Creating users...');
    const users = await User.insertMany([
      {
        name: 'Alice Johnson',
        email: 'alice@octofit.com',
        password: 'hashed_password_1',
        bio: 'Fitness enthusiast and marathon runner',
      },
      {
        name: 'Bob Smith',
        email: 'bob@octofit.com',
        password: 'hashed_password_2',
        bio: 'Gym rat and strength training expert',
      },
      {
        name: 'Carol Davis',
        email: 'carol@octofit.com',
        password: 'hashed_password_3',
        bio: 'Yoga instructor and wellness coach',
      },
      {
        name: 'David Wilson',
        email: 'david@octofit.com',
        password: 'hashed_password_4',
        bio: 'Cyclist and outdoor adventure lover',
      },
      {
        name: 'Emma Brown',
        email: 'emma@octofit.com',
        password: 'hashed_password_5',
        bio: 'Swimming champion and triathlete',
      },
    ]);
    console.log(`✅ Created ${users.length} users`);

    // Create Teams
    console.log('\n🤝 Creating teams...');
    const teams = await Team.insertMany([
      {
        name: 'Iron Phoenix',
        description: 'A team focused on strength and gym workouts',
        members: [users[0]._id, users[1]._id],
        createdBy: users[0]._id,
      },
      {
        name: 'Morning Runners',
        description: 'Early risers who love running and cardio',
        members: [users[2]._id, users[3]._id, users[4]._id],
        createdBy: users[2]._id,
      },
    ]);
    console.log(`✅ Created ${teams.length} teams`);

    // Create Activities
    console.log('\n🏃 Creating activities...');
    const now = new Date();
    const activities = await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'running',
        duration: 45,
        distance: 8.5,
        calories: 650,
        intensity: 'high',
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        description: 'Morning run in the park',
      },
      {
        userId: users[0]._id,
        type: 'gym',
        duration: 60,
        calories: 520,
        intensity: 'medium',
        date: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        description: 'Upper body workout',
      },
      {
        userId: users[1]._id,
        type: 'gym',
        duration: 90,
        calories: 780,
        intensity: 'high',
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        description: 'Heavy lifting session',
      },
      {
        userId: users[2]._id,
        type: 'yoga',
        duration: 60,
        calories: 300,
        intensity: 'low',
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        description: 'Relaxing yoga session',
      },
      {
        userId: users[3]._id,
        type: 'cycling',
        duration: 120,
        distance: 45,
        calories: 1200,
        intensity: 'high',
        date: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
        description: 'Long distance bike ride',
      },
      {
        userId: users[4]._id,
        type: 'swimming',
        duration: 45,
        distance: 2.5,
        calories: 400,
        intensity: 'medium',
        date: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        description: 'Pool swimming workout',
      },
    ]);
    console.log(`✅ Created ${activities.length} activities`);

    // Create Workouts
    console.log('\n💪 Creating workouts...');
    const workouts = await Workout.insertMany([
      {
        name: 'Full Body Strength',
        description: 'Complete full body workout for all muscle groups',
        duration: 60,
        exercises: ['Squats', 'Bench Press', 'Deadlifts', 'Pull-ups', 'Dumbbell Rows'],
        difficulty: 'intermediate',
        targetMuscles: ['Chest', 'Back', 'Legs', 'Arms'],
        createdBy: users[1]._id,
      },
      {
        name: 'Morning Cardio Blast',
        description: 'Quick and effective cardio routine',
        duration: 30,
        exercises: ['Running', 'Jumping Jacks', 'Burpees', 'High Knees'],
        difficulty: 'beginner',
        targetMuscles: ['Cardio', 'Legs'],
      },
      {
        name: 'Core & Abs',
        description: 'Focused core strengthening workout',
        duration: 45,
        exercises: ['Planks', 'Crunches', 'Leg Raises', 'Russian Twists', 'Bicycle Crunches'],
        difficulty: 'intermediate',
        targetMuscles: ['Core', 'Abs'],
      },
      {
        name: 'Advanced HIIT',
        description: 'High Intensity Interval Training for advanced users',
        duration: 40,
        exercises: ['Sprints', 'Box Jumps', 'Mountain Climbers', 'Kettlebell Swings'],
        difficulty: 'advanced',
        targetMuscles: ['Full Body'],
      },
    ]);
    console.log(`✅ Created ${workouts.length} workouts`);

    // Create Leaderboard entries
    console.log('\n🏆 Creating leaderboard entries...');
    const leaderboardEntries = await Leaderboard.insertMany([
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        score: 1850,
        rank: 1,
        totalActivities: 2,
        totalDuration: 105,
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        score: 1560,
        rank: 2,
        totalActivities: 1,
        totalDuration: 90,
      },
      {
        userId: users[2]._id,
        teamId: teams[1]._id,
        score: 1200,
        rank: 3,
        totalActivities: 1,
        totalDuration: 60,
      },
      {
        userId: users[3]._id,
        teamId: teams[1]._id,
        score: 2400,
        rank: 1,
        totalActivities: 1,
        totalDuration: 120,
      },
      {
        userId: users[4]._id,
        teamId: teams[1]._id,
        score: 1000,
        rank: 4,
        totalActivities: 1,
        totalDuration: 45,
      },
    ]);
    console.log(`✅ Created ${leaderboardEntries.length} leaderboard entries`);

    console.log('\n✨ Database seeding completed successfully!');
    console.log(`
📊 Summary:
  - Users: ${users.length}
  - Teams: ${teams.length}
  - Activities: ${activities.length}
  - Workouts: ${workouts.length}
  - Leaderboard entries: ${leaderboardEntries.length}
    `);

    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
