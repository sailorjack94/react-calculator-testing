import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
  });

  it('should be able to add', () => {
    const button1 = container.getByTestId('number1');
    const operator_add = container.getByTestId('add');
    const button4 = container.getByTestId('number4');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button1);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('5');

    
  });

  it('should be able to subtract', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const operator_subtract = container.getByTestId('subtract');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button7);
    fireEvent.click(operator_subtract);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('3')
  });

  it('should be able to multiply', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operator_multiply = container.getByTestId('multiply');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button3);
    fireEvent.click(operator_multiply);
    fireEvent.click(button5);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('15')
  });

  it('should be able to divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operator_divide = container.getByTestId('divide');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operator_divide);
    fireEvent.click(button7);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('3')
  });

  it('concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('217')
  });

  it('chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operator_multiply = container.getByTestId('multiply');
    const operator_equals = container.getByTestId('equals');
    fireEvent.click(button2);
    fireEvent.click(operator_multiply);
    fireEvent.click(button1);
    fireEvent.click(operator_equals);
    fireEvent.click(operator_multiply);
    fireEvent.click(button7);
    fireEvent.click(operator_equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal).toHaveTextContent('14')
  });

  xit('clear the running total without affecting the calculation', () => {

  });


});

