## DECO3500 UQ Socialization App (UQ Plaza)

## The Problem Space

On the UQ campus, many students feel isolated and lack opportunities to make meaningful social connections with others, leading to a decline in mental health. The problem space is as follows:

**1. Increased isolation:** Although students are in a crowded campus environment, they still lack opportunities to build deep relationships with others and have difficulty finding friends or partners who share common interests. This sense of isolation is especially pronounced for freshmen or out-of-town students.

**2. Social networking fragmentation:** Even when students use existing social media platforms, social needs on campus are still not well met. Existing social networks or platforms lack campus-specific social features to provide suggestions based on location, activity, or mood in real-time.

**3. Mood swings affect interactions:** Students experience mood swings on campus and may be affected by academic pressure, social difficulties, or mental health issues. However, students do not have an easy and intuitive way to express their emotional state, leading to further reduced communication and interaction.


## The Solution

The UQ Plaza app helps students have more meaningful social connections and improve their campus experience. Here are the key solutions and features of the app: 

**1.Interest-based connectivity:**
Students can choose topics or hobbies that interest them, and the app recommends personalized friends and school activities, which means it can ensure that the connections are meaningful and relevant.

**2. Real-time mood map:**
Through geolocation (2D and 3D), mood maps show the emotional state of students in various areas of campus. Users can tag their current emotions and see the distribution of similar emotions in others. This feature helps students interact in real-time with people with similar emotions or find peers with those with positive emotions.

**3. Location-based social features:**
The app uses geolocation to recommend nearby friends, activities, and popular events based on the user's current location and interests. This helps students keep abreast of what's going on around campus and easily connect with those nearby.

# Prototype
## Deploying the Prototype

To deploy the prototype, initialize the repository using ```git clone```.

#### 1. Install all the dependencies by running
```
npm install
```
make sure npm is installed beforehand

#### 2. Run the application using
```
npx expo start
```
for private networks, and
```
npx expo start --tunnel
```
for public networks

#### 3. Install the Expo Go app in the Play/App store if you haven't already and scan the QR code that shows up in the terminal

#### 4. Let the application initialize itself (this might take a while)


## User Guide 

Once the application is running, you'll be met with the login page

<img src="https://github.com/user-attachments/assets/f1fbd50f-8a96-4e90-81c2-8f541345e156" width="300">


To log in, there will be a user initialized by default for demo purposes
```
username: s4819215
password: password123
```
or log in using the other accounts on the database
| Username  | Password |
| ------------- | ------------- |
| s4819188  | malikmalik  |
| s4818189  | password123  |
| s4818190  | password123  |
| s4818191  | password123  |
| s4819201  | password123  |
| ... | ... |
| s4819214  | password123  |

with the dots indicating that users from the range of s4819201 to s4819214 exist with the same password.

After logging in for the first time, you will be taken through the introduction pages 

(with the exception of demo user s4819215, who will be taken through the introduction pages after every log out, with all of her previous information deleted)

<img src="https://github.com/user-attachments/assets/569872b1-0505-42d9-96fa-b291dc74d616" width="300">
<img src="https://github.com/user-attachments/assets/58a4aa73-4fa6-451f-ad19-87877c87cbc7" width="300">
<img src="https://github.com/user-attachments/assets/8ff9dec7-1fc2-4fd7-9230-2ea8546d1d12" width="300">
<img src="https://github.com/user-attachments/assets/4e530ee9-14c6-4635-9dd1-243c57d0765b" width="300">
<img src="https://github.com/user-attachments/assets/dc512661-b2e6-4275-99ae-4a8f096ed4d8" width="300">
<img src="https://github.com/user-attachments/assets/6f820c50-cb78-4f7b-b132-7a8b646e921b" width="300">
<img src="https://github.com/user-attachments/assets/050c3908-7f84-4513-9d11-ca0695e33b99" width="300">



after following the prompts, you will be taken to the homepage. Going to the profile page will show the previously submitted data.


<img src="https://github.com/user-attachments/assets/83d8d4cd-c16c-4019-ba34-d4856b3b42bf" width="300">
<img src="https://github.com/user-attachments/assets/c23b2e20-93cb-4351-8ca6-d74667090c15" width="300">

### Application Features

#### 1. Homepage
The homepage contains two views, a 'Posts' view and an 'Events' view. These views provide the user with content their friends in UQ are posting, or the events currently going on in the communities that they joined.

<img src="https://github.com/user-attachments/assets/83d8d4cd-c16c-4019-ba34-d4856b3b42bf" width="300">
<img src="https://github.com/user-attachments/assets/fe28fbdd-f5c7-484a-ad5f-5e3037258bb5" width="300">
<img src="https://github.com/user-attachments/assets/80036d4c-eb42-4bf5-8089-58ba8400fb38" width="300">
<img src="https://github.com/user-attachments/assets/5f0fcbb7-6a93-4a89-b0af-81239d659442" width="300">


#### 2. Live Map
The live map feature shows where your friends are on campus, providing a way to see who you can interact with or perform activities together on that day. Users can post their current status of what they are doing at that location. The map can be toggled between a 2D and a 3D view.

<img src="https://github.com/user-attachments/assets/2bdec950-b588-40e6-9c44-258e92a97033" width="300">
<img src="https://github.com/user-attachments/assets/22f96ff8-3d98-41ce-9fc3-3237e6403fbb" width="300">
<img src="https://github.com/user-attachments/assets/d48524e3-ad0c-4be5-ad84-48209a9f9682" width="300">
<img src="https://github.com/user-attachments/assets/13e7b72d-1e79-4c04-8f3d-345e92a85a54" width="300">


#### 3. Community Tab
The community tab provides a way to meet new people and join new communities. The 'People' tab recommends you people on campus with the most similar interests to you, finding you people who you're most compatible with. This adds incentive into making new connections and provides topics of discussion that you can talk to them about.

<img src="https://github.com/user-attachments/assets/e7b16d38-1cb2-4e64-adcd-c8a4f44872ed" width="300">
<img src="https://github.com/user-attachments/assets/5d04fb49-891e-4d63-a738-06eba25bbfbb" width="300">

The 'Communities' tab shows communities on UQ that you might like. These communities group UQ students together, inviting another sense of belongingness to its members. The communities show the activities that will be held, interests that people in the community have, and the members of to community sorted by similar interests.

<img src="https://github.com/user-attachments/assets/6213092d-fd9c-4836-8d60-e1b97df1aea1" width="300">
<img src="https://github.com/user-attachments/assets/91140a9e-32d7-4b27-a784-4e11e41a82a9" width="300">
<img src="https://github.com/user-attachments/assets/472784a1-2bbe-472f-9287-ebe8cbdf8952" width="300">


#### 4. Chat
The chat feature provides a way to communicate with the friends that you've made on campus.

<img src="https://github.com/user-attachments/assets/3af05b28-7b19-432b-b201-038476d931c4" width="300">
<img src="https://github.com/user-attachments/assets/cbb282bb-878d-4259-aff7-4fe51f4f970a" width="300">


For the Figma document used in the design process, see the following link

[Figma Prototype](https://www.figma.com/design/DX13iD5eZX0sLRg0v771oW/UQ-Socialization-App?node-id=0-1&t=WQEik1chB6WKlcNU-1)
