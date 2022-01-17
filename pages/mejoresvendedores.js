import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MEJORES_VENDEDORES = gql`
  query mejoresVendedores {
    mejoresVendedores {
      total
      vendedor {
        nombre
        apellido
        email
      }
    }
  }
`;

const Mejoresvendedores = () => {
  const { data, loading, error, startPolling, stopPolling } =
    useQuery(MEJORES_VENDEDORES);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return null;

  console.log(data);
  const { mejoresVendedores } = data;

  const vendedorGrafica = [];

  mejoresVendedores.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total,
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>

      <BarChart
        width={500}
        height={300}
        data={vendedorGrafica}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nombre" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#3182CE" />
      </BarChart>
    </Layout>
  );
};

export default Mejoresvendedores;
