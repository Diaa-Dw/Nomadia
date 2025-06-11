import { SearchFormPayload } from '@/types';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { INITIAL_VALUES } from '../constants';
import { searchBarValidationSchema } from '../schema';
import { parseSearchQueryParams } from '../utils';

export const useSearchForm = () => {
  const { pathname, search } = useLocation();

  const isSearchPage = pathname.includes('/search');

  const formikProps = useFormik<SearchFormPayload>({
    initialValues: INITIAL_VALUES,
    validationSchema: searchBarValidationSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (!isSearchPage) {
      return;
    }
    const parsedSearch = parseSearchQueryParams(search);
    formikProps.setValues(parsedSearch);
  }, [isSearchPage, search]);

  return { formikProps };
};
