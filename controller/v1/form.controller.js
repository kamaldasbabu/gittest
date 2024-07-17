// form controller

const form = async (req, res) => {
  res.send(`
      <form action="/api/v1/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" required><br><br>
        <button type="submit">Submit</button>
      </form>
    `);
};

const submit = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Received the data: Name - ${name}, Age - ${age}`);
};

module.exports = { submit, form };
