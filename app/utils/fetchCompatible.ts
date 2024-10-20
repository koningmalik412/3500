import { fetchHobbiesByUsername, fetchAllUsers } from "./database";

interface User {
  bio: string | null;
  created_at: string;
  date_of_birth: string;
  ethnicity: string | null;
  faculty: string;
  friends: number;
  full_name: string;
  gender: string | null;
  id: number;
  is_initialized: number;
  major: string;
  mbti: string | null;
  nickname: string | null;
  password: string;
  profile_picture: string;
  program_code: string;
  student_number: string;
  study_program: string;
  study_status: string;
  username: string;
}

interface Interest {
  category: string;
  hobby: string;
  id: number;
}

interface CompatibleUser {
  user: User;
  similarInterests: Interest[];
}

async function findCompatible(
  userList: User[],
  userInterests: Interest[]
) {
  const compatibleUsers: CompatibleUser[] = [];

  for (const user of userList) {
    const interestList = await fetchHobbiesByUsername(user.username);
    const similarInterests = interestList.filter((interest) => {
      return userInterests.some((hobby) => {
        return hobby.id === interest.id;
      });
    });

    if (similarInterests.length > 0) {
      compatibleUsers.push({ user, similarInterests });
    }
  }
  return compatibleUsers;
}

export const fetchCompatible = async (user: User) => {
  
    const allUserList = await fetchAllUsers();
    const userList = allUserList.filter((u) => u.username !== user.username);
    const userInterests = await fetchHobbiesByUsername(user.username);

    const compatibleUsers = await findCompatible(userList, userInterests);
    const sortedCompatibleUsers = compatibleUsers.sort((a, b) => {
      return b.similarInterests.length - a.similarInterests.length;
    });
    return (sortedCompatibleUsers);
}