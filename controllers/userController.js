

const allUsers = async (req, res) => {
  const db = req.app.get("db");
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const createUser = async (req, res) => {
  const db = req.app.get("db");
  const { name, email } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.json({ message: "User created successfully", newUser: { id: result.insertId, name, email } });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { allUsers, createUser };
