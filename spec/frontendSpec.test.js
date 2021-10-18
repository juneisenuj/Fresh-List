import React from 'react';
import reactDom from 'react-dom';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App.jsx'
import Search from '../src/Components/Search.jsx'
import Main from '../src/Components/Main.jsx'
import List from '../src/Components/List.jsx'
import EditForm from '../src/Components/EditForm.jsx'
global.React = React;

test('should render App component', () => {
  render(<App/>);
  const appElement = screen.getByTestId('app-1')
  expect(appElement).toBeInTheDocument();
})

test('should render Main component', () => {
  render(<Main/>);
  const mainElement = screen.getByTestId('main-1')
  expect(mainElement).toBeInTheDocument();
})

test('should render Search component', () => {
  render(<Search/>);
  const searchElement = screen.getByTestId('search-1')
  expect(searchElement).toBeInTheDocument();
})

test('should render List component', () => {
  render(<List/>);
  const listElement = screen.getByTestId('list-1')
  expect(listElement).toBeInTheDocument();
})


test('should render EditForm component', () => {
  render(<EditForm/>);
  const editFormElement = screen.getByTestId('editForm-1')
  expect(editFormElement).toBeInTheDocument();
})