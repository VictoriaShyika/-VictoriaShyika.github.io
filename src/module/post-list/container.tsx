import React, { useEffect } from 'react';
import { ACTION_ERROR_INTER, DATA_INTER } from './constant';
import { useQuery } from 'react-query';
import { Component } from './component';
import { POST_LIST_DATA_MODULE_NAME } from '../post-list-data';

export const Container: React.FC<{ result: number }> = ({ result }) => {
  const preFetch = useQuery(POST_LIST_DATA_MODULE_NAME);

  const isLoading = () => {
    if (preFetch.isLoading) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess) {
      return true;
    }
  };

  const isError = () => {
    if (preFetch.isError && !preFetch.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = preFetch.error as ACTION_ERROR_INTER;

    if (error) {
      return error.message;
    }
  };

  const getData = (): DATA_INTER | undefined => {
    const data = preFetch.data as unknown as DATA_INTER;

    if (data) {
      return data;
    }
  };

  return (
    <Component
      result={result}
      data={getData()}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
    />
  );
};
