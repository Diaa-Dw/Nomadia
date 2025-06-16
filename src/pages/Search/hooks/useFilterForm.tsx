import { useFormik } from 'formik';
import { filterInitialValues } from '../Search.constants';
import { useSearchParams } from 'react-router-dom';
import { FilterFormValues } from '../types';
import { useState } from 'react';

const useFilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [appliedAmenities, setAppliedAmenities] = useState<string[]>([]);

  const handleSubmit = (values: FilterFormValues) => {
    const newParams = new URLSearchParams(searchParams);

    if (values.starRate) {
      newParams.set('starRate', values.starRate.toString());
    } else {
      newParams.delete('starRate');
    }

    setSearchParams(newParams);
    setAppliedAmenities(values.amenities);
  };

  const formikProps = useFormik({
    initialValues: filterInitialValues,
    onSubmit: handleSubmit,
  });

  return { formikProps, appliedAmenities };
};

export default useFilterForm;
