import { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams, Link } from 'react-router-dom';

import InputField from '../../UI/molecules/InputField';
import LocationsContext from '../../../contexts/LocationsContext';

const EditLocation = () => {

  const { returnSpecificLocation, editSpecificLocation } = useContext(LocationsContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState('');

  useEffect(() => {
    setData(returnSpecificLocation(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.name || '',
      country: data?.country || '',
      description: data?.description || '',
      latitude: data?.location?.latitude || '',
      longitude: data?.location?.longitude || ''
    },
    // validationSchema: {

    // },
    onSubmit: (values) => {
      const editedLandmark = {
        name: values.name,
        country: values.country,
        description: values.description,
        location: {
          latitude: Number(values.latitude),
          longitude: Number(values.longitude)
        }
      }
      editSpecificLocation(editedLandmark, id);
      navigate(-1);
    }
  });

  return (
    <section>
      <Link to={-1}>Go Back</Link>
      {
        data ? 
        <>
          <h2>Edit {data.name} Landmark</h2>

          <form onSubmit={formik.handleSubmit}>
            <InputField
              labelText='Name of the landmark:'
              inputType='text'
              name='name' id='name'
              placeholderText='Enter the name of the landmark...'
              value={formik.values.name}
              onChangeF={formik.handleChange}
            />
            <InputField
              labelText='Country of the landmark:'
              inputType='text'
              name='country' id='country'
              placeholderText='Enter the country of the landmark...'
              value={formik.values.country}
              onChangeF={formik.handleChange}
            />
            <InputField
              labelText='Latitude of the landmark:'
              inputType='text'
              name='latitude' id='latitude'
              placeholderText='Enter the latitude of the landmark...'
              value={formik.values.latitude}
              onChangeF={formik.handleChange}
            />
            <InputField
              labelText='Longitude of the landmark:'
              inputType='text'
              name='longitude' id='longitude'
              placeholderText='Enter the longitude of the landmark...'
              value={formik.values.longitude}
              onChangeF={formik.handleChange}
            />
            <InputField
              labelText='Short description about the landmark:'
              inputType='textarea'
              name='description' id='description'
              placeholderText='Describe the landmark...'
              value={formik.values.description}
              onChangeF={formik.handleChange}
            />
            <input type="submit" value="Finish editing Landmark" />
          </form>

          <p>
            Don't know the coordinates? Go find them out in <a href="https://www.latlong.net/" target='_blank' rel="noreferrer">this page</a>.
          </p>
        </> : 
        <p>Nėra duomenų</p>
      }
    </section>
  );
}
 
export default EditLocation;