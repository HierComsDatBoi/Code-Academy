import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'


const AddPet = () => {

  const navigate = useNavigate();

  const SendPetDB = (newPet) => {
    fetch('http://localhost:5500/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPet)
    }).then(res => res.json())
      .then(resMessage => console.log(resMessage))
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      age: Number('')
    },

    onSubmit: (values) => {
      const newPet = {
        name: values.name,
        type: values.type,
        age: Number(values.age)
      }
      //funkcija siusti
      SendPetDB(newPet);
      console.log(newPet);
    }
  });



  return (

    <section>
      <h2>Add pet form</h2>

      <Link to={-1}>Back</Link>

      <form onSubmit={formik.handleSubmit}>
    <label htmlFor="name">Pet name: </label>
        <input type="text" name='name' id='name'
          placeholder='Pet Name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        {/* <input type="text" name="type" id="type"
          placeholder='Pet Type'
          value={formik.values.type}
          onChange={formik.handleChange}
        /> */}

        <fieldset
          id="type"
          label="Pet Type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
        >
          <legend>Pet Type</legend>

          <input
            type="radio"
            name="type"
            id="typeCat"
            value="cat"
          />
          <label htmlFor="typeCat">Cat</label>

          <input
            type="radio"
            name="type"
            id="typeDog"
            value="dog"
          />
          <label htmlFor="typeDog">Dog</label>

          <input
            type="radio"
            name="type"
            id="typeGoat"
            value="goat"
          />
          <label htmlFor="typeGoat">Goat</label>

          <input
            type="radio"
            name="type"
            id="typeTutel"
            value="tutel"
          />
          <label htmlFor="typeTutel">Tutel!</label>


        </fieldset>

          <label htmlFor="age">Pet age: </label>
        <input type="number" name='age' id='age'
          placeholder='Pet Age'
          value={formik.values.age}
          onChange={formik.handleChange}
        />

        <input type="submit" value='Add' />

      </form>

    </section>
  );
}

export default AddPet;