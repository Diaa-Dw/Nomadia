import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { INITIAL_VALUES } from '../constants';
import { searchBarValidationSchema } from '../schema';
import { buildSearchParams, parseSearchQueryParams } from '../utils/searchParams';
import { SearchFormPayload } from '@/types';

const useSearchForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = location.pathname.includes('/search');

  const handleFormSubmit = (values: SearchFormPayload) => {
    const queryString = buildSearchParams(values);

    navigate(
      {
        pathname: '/me/search',
        search: `?${queryString}`,
      },
      { replace: isSearchPage }
    );
  };

  const formikProps = useFormik<SearchFormPayload>({
    initialValues: INITIAL_VALUES,
    validationSchema: searchBarValidationSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (!isSearchPage) return;

    const parsedValues = parseSearchQueryParams(location.search);
    formikProps.setValues(parsedValues);
  }, [isSearchPage, location.search]);

  return { formikProps };
};

export default useSearchForm;
