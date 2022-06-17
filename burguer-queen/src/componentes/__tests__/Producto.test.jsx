import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Producto from "../Producto";

describe("<Producto />", () => {
  const defaulProps = {
    id: "1",
    titulo: "Test",
    imagen: "https://test.com/img.jpg",
    descripcion: "test description",
    precio: 10,
    onProductAdded: jest.fn(),
  };
  test('renders component correctly', async () => {
    render(<Producto {...defaulProps} />)
  
    expect(await screen.findByText("Test")).toBeVisible();
    expect(await screen.findByText("test description")).toBeVisible();
    expect(await screen.findByText(`10 MXN`)).toBeVisible();
  })

  test('calls onProductAdded when clicking in the primary button("Comprar")', async () => {
    render(<Producto {...defaulProps} />)

    fireEvent.change(await screen.findByLabelText("Cantidad"), {target: {value: '10'}})
    fireEvent.click(await screen.findByText("Comprar"))
  
    expect(defaulProps.onProductAdded).toHaveBeenCalledWith({ id: "1", titulo: "Test", cantidad: 10 });
  })
})