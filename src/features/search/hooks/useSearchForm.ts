import { useFormik } from 'formik';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { INITIAL_VALUES } from '../constants';
import { searchBarValidationSchema } from '../schema';
import { buildSearchParams, parseSearchQueryParams } from '@/utils';
import { SearchFormPayload } from '@/types';

const useSearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = useMemo(() => location.pathname.includes('/search'), [location.pathname]);

  const handleFormSubmit = (values: SearchFormPayload) => {
    const queryString = buildSearchParams(values);

    if (isSearchPage) {
      setSearchParams(new URLSearchParams(queryString));
    } else {
      navigate(
        {
          pathname: '/search',
          search: `?${queryString}`,
        },
        { replace: true }
      );
    }
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
