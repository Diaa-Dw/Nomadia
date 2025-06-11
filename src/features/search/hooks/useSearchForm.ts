import { SearchFormPayload } from '@/types';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { INITIAL_VALUES, SEARCH_FORM_COUNTERS } from '../constants';
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

  const handleCounterChange = (field: keyof SearchFormPayload, delta: number) => {
    const config = SEARCH_FORM_COUNTERS.find(c => c.name === field);
    if (!config) return;

    const current = formikProps.values[field] as number;
    const updated = Math.max(config.min, current + delta);

    formikProps.setFieldValue(field, updated);
  };

  return { formikProps, handleCounterChange };
};
