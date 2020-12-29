import { model, Schema, Model, Document } from 'mongoose';

// an interface that describes the properties required to create a new user
interface User {
  email: string;
  password: string;
}

// an interface that describes the properties that a user model has
interface UserModel extends Model<UserDoc> {
  build(attributes: User): UserDoc;
}

// an interface that describes the user document properties
interface UserDoc extends Document {
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.statics.build = (userAttributes: User) => {
  return new User(userAttributes);
};

// compile the model
const User = model<UserDoc, UserModel>('User', userSchema);

export { User };
