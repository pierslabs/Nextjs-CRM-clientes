import Reactm, { useContext } from "react";
import Layout from "../components/Layout";
import AsignarCliente from "../components/pedidos/AsignarCliente";

// Context pedido
import PedidoContext from "../context/pedidos/pedidoContext";

const NuevoPedido = () => {
  // utilizarContext y extraer sus valores
  const pedidoContext = useContext(PedidoContext);
  // console.log(pedidoContext);

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <AsignarCliente />
    </Layout>
  );
};

export default NuevoPedido;