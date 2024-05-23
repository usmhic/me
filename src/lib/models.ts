// models/index.ts
import mongoose, { Schema, Document } from 'mongoose';

// Card model
interface ICard extends Document {
  fullName: string;
  shortBio: string;
  socialLinks: string[];
  media: string[];
}

const CardSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  shortBio: { type: String, required: true },
  socialLinks: { type: [String], default: [] },
  media: { type: [String], default: [] },
});

const Card = mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema);

// Resume model
interface IResume extends Document {
  longBio: string;
}

const ResumeSchema: Schema = new Schema({
  longBio: { type: String, required: true },
});

const Resume = mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);

// Skill model
interface ISkill extends Document {
  category: string;
  name: string;
  tag: string;
}

const SkillSchema: Schema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  tag: { type: String, required: true },
});

const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);

// Experience model
interface IExperience extends Document {
  position: string;
  org: string;
  from: Date;
  to: Date;
  desc: string;
}

const ExperienceSchema: Schema = new Schema({
  position: { type: String, required: true },
  org: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  desc: { type: String, required: true },
});

const Experience = mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);

// Education model
interface IEducation extends Document {
  field: string;
  intitu: string;
  from: Date;
  to: Date;
  desc: string;
}

const EducationSchema: Schema = new Schema({
  field: { type: String, required: true },
  intitu: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  desc: { type: String, required: true },
});

const Education = mongoose.models.Education || mongoose.model<IEducation>('Education', EducationSchema);

// Project model
interface IProject extends Document {
  title: string;
  desc: string;
  src: string;
  demo: string;
  media: string[];
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  src: { type: String, required: true },
  demo: { type: String, required: true },
  media: { type: [String], default: [] },
});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

// Activity model
interface IActivity extends Document {
  title: string;
  desc: string;
  more: string;
  media: string[];
}

const ActivitySchema: Schema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  more: { type: String, required: true },
  media: { type: [String], default: [] },
});

const Activity = mongoose.models.Activity || mongoose.model<IActivity>('Activity', ActivitySchema);

export { Card, Resume, Skill, Experience, Education, Project, Activity };
