import User from "../models/user.js"

export const create = async (data) => {
    const user = await User.create(data);
    const {password, ...userWithoutPassword} = user.toObject();
    return userWithoutPassword;
}

export const getAll = async () => {
    const users = await User.find({}, { password: 0 });
    return users;
}
