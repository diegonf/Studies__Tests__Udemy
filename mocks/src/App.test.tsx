import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

describe('<App />', () => {
  it('should navigate to Page2 when button clicked', () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>)

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith('/page2');
  });
});