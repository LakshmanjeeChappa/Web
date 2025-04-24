# Note Taking App - Database Project

This project is a **simple note-taking app database**. It is built using **MySQL** and includes users, notes, sections, and tags. It helps organize notes better by grouping and tagging them.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# What This Project Does

-> Users can **register** with their email and password.
-> Each user can **create sections**.
- >Notes can be added into these sections.
- >Users can also **tag notes** with different labels 
-> All notes and tags are linked to users.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ERD Diagram (Database Design)

You can see how the tables are connected in this diagram:

![NoteTakingApp](https://github.com/user-attachments/assets/25580815-3a96-4d84-9b27-ef8ec0abadcb)


# Business Rules
A User can have multiple Notes.
Each Note belongs to one Section.
Identifiers classify Notes.
A Section can have multiple Notes.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Tables in the Database

### 1. USER
- Stores user information.
- Fields: FullName, FirstName, LastName, Email, Password.

### 2. SECTION
- Like folders to group notes.
- Each section belongs to one user.

### 3. NOTE
- Stores the actual note content.
- Each note belongs to a section and a user.

### 4. TAG
- Tags help to label notes (example: “personal”, “school”).
- Tags are created by users.

### 5. NOTE_TAG
- This table connects notes and tags.
- A note can have many tags, and a tag can be used on many notes.

---


