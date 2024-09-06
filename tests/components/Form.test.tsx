import React from "react"
import Form from '../../src/components/Form'
import { render, screen } from '@testing-library/react'

describe('Form Components', () => {
    const renderComponents  = () => {
        render(<Form />);

        return {
            nameInput: screen.getByPlaceholderText(/name/i),
            ageInput: screen.getByPlaceholderText(/age/i),
            submitBtn: screen.getByRole('button', {name : /submit/i}),
            textarea: screen.getByPlaceholderText(/about/i),
            toggle: screen.getByTestId('remember'),
            checkbox: screen.getByTestId('privaicyPolicy'),
            combobox: screen.getByRole('combobox')
        }
    }
    
    it('should render the default form.', () => {
        const element =renderComponents()

        expect(element.nameInput).toBeInTheDocument();
        expect(element.nameInput).toBeRequired();
        expect(element.ageInput).toBeInTheDocument();
        expect(element.ageInput).toBeRequired();
        expect(element.submitBtn).toBeInTheDocument();
        expect(element.textarea).toBeInTheDocument();
        expect(element.toggle).toBeInTheDocument();
        expect(element.checkbox).toBeInTheDocument();
        expect(element.combobox).toBeInTheDocument();
    })
})