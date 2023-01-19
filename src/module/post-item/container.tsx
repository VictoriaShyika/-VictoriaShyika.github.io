import React from 'react';
import {
  ACTION_ERROR_INTER,
  ACTION_RESPONSE_INTER,
  DATA_INTER,
  MODULE_NAME,
} from './constant';
import { useQuery } from 'react-query';
import { Component } from './component';
import { action } from './action';

export const Container: React.FC<{ itemId: any }> = ({ itemId }) => {
  const preFetch = useQuery([MODULE_NAME], (e: any) => action(itemId));

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
    const data = preFetch.data as unknown as ACTION_RESPONSE_INTER;

    if (data) {
      return data;
    }
  };

  return (
    <Component
      data={getData()}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
    />
  );
};
