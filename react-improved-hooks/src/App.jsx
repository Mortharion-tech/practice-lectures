import { useImmer } from "use-immer";
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
  const [form, setForm] = useImmer(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    setForm(initialFormValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{" "}
        <input
          value={form.firstName}
          onChange={(e) =>
            setForm((draft) => {
              draft.firstName = e.target.value;
            })
          }
        />
      </label>
      <label>
        Last name:{" "}
        <input
          value={form.lastName}
          onChange={(e) =>
            setForm((draft) => {
              draft.lastName = e.target.value;
            })
          }
        />
      </label>
      <label>
        Age:{" "}
        <input
          value={form.age}
          onChange={(e) =>
            setForm((draft) => {
              draft.age = e.target.value;
            })
          }
        />
      </label>
      <label>
        Height:{" "}
        <input
          value={form.height}
          onChange={(e) =>
            setForm((draft) => {
              draft.height = e.target.value;
            })
          }
        />
      </label>
      <label>
        Weight:{" "}
        <input
          value={form.weight}
          onChange={(e) =>
            setForm((draft) => {
              draft.weight = e.target.value;
            })
          }
        />
      </label>
      <h2>Social</h2>
      <label>
        Insta Followers:{" "}
        <input
          value={form.socialProfileScores.instaFollowers}
          onChange={(e) =>
            setForm((draft) => {
              draft.socialProfileScores.instaFollowers = e.target.value;
            })
          }
        />
      </label>
      <label>
        Twitter Followers:{" "}
        <input
          value={form.socialProfileScores.twitterFollowers}
          onChange={(e) =>
            setForm((draft) => {
              draft.socialProfileScores.twitterFollowers = e.target.value;
            })
          }
        />
      </label>
      <input type="submit" />
    </form>
  );
}
