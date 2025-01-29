"use client";
import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import { SignInProps } from '@/interface/interface';
import { useUser } from '@/ctx/userContext';


const SignUp = () => {
  const router = useRouter(); 
  const {setUser} = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          onSubmit={(
            values: SignInProps,
            { setSubmitting }: FormikHelpers<SignInProps>
          
          ) => {
            setTimeout(() => {
              sessionStorage.setItem('user',JSON.stringify(values));
              setUser(values)
              setSubmitting(false);
              router.replace('/');
            }, 500);
          }}
        >
          <Form className="space-y-6">
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-gray-700">
                Логин:
              </label>
              <Field
                type="text"
                id="login"
                name="login"
                placeholder="Введите логин"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Пароль:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Введите пароль"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Войти
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;