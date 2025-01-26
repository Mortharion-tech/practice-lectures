import { useState } from "react";
import "./App.css";

const initialFormValue = {
  firstName: "",
  lastName: "",
  age: "",
  height: "",
  weight: "",
  socialProfileScores: {
    instaFollowers: "",
    twitterFollowers: "",
  },
};

export default function App() {
  const [form, setForm] = useState(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm(initialFormValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{" "}
        <input
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </label>
      <label>
        Age:{" "}
        <input
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
      </label>
      <label>
        Height:{" "}
        <input
          value={form.height}
          onChange={(e) => setForm({ ...form, height: e.target.value })}
        />
      </label>
      <label>
        Weight:{" "}
        <input
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
        />
      </label>
      <h2>Social</h2>
      <label>
        Insta Followers:{" "}
        <input
          value={form.socialProfileScores.instaFollowers}
          onChange={(e) =>
            setForm({
              ...form,
              socialProfileScores: {
                ...form.socialProfileScores,
                instaFollowers: e.target.value,
              },
            })
          }
        />
      </label>
      <label>
        Twitter Followers:{" "}
        <input
          value={form.socialProfileScores.twitterFollowers}
          onChange={(e) =>
            setForm({
              ...form,
              socialProfileScores: {
                ...form.socialProfileScores,
                twitterFollowers: e.target.value,
              },
            })
          }
        />
      </label>
      <input type="submit" />
    </form>
  );
}
