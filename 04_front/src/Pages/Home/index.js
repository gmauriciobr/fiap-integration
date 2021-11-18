import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Creators as MetricasActions } from "../../Store/Ducks/metrica";

import ContainerMain from "../../Components/ContainerMain";
import Table from "../../Components/Table";
import TableHeader from "../../Components/TableHeader";
import TableLine from "../../Components/TableLine";
import { TableValue } from "../../Components/TableValue";
import WrapperFlex from "../../Components/WrapperFlex";
import Button from "../../Components/Button";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.metrica);

  useEffect(() => {
    dispatch(MetricasActions.getMetricaRequest());
  }, []);

  return (
    <ContainerMain>
      <WrapperFlex
        style={{
          maxWidth: "1024px",
          width: "100%",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Button
          style={{ padding: "10px", width: "200px" }}
          onClick={() => navigate("/create-drone")}
        >
          Cadastrar Drone
        </Button>
        <Button
          style={{ padding: "10px", width: "200px" }}
          onClick={() => navigate("/create-metrica")}
        >
          Cadastrar Métrica
        </Button>
      </WrapperFlex>
      <WrapperFlex style={{ width: "100%", justifyContent: "center" }}>
        <WrapperFlex style={{ maxWidth: "1024px", width: "100%" }}>
          <Table>
            <tr>
              <TableHeader>Drone</TableHeader>
              <TableHeader>Latitude</TableHeader>
              <TableHeader>Longitude</TableHeader>
              <TableHeader>Temperatura</TableHeader>
              <TableHeader>Umidade</TableHeader>
            </tr>
            {data.map((d) => (
              <TableLine>
                <TableValue>{d.droneNome}</TableValue>
                <TableValue>{d.latitude}</TableValue>
                <TableValue>{d.longitude}</TableValue>
                <TableValue>{d.temperatura || "-"}</TableValue>
                <TableValue>{d.umidade}</TableValue>
              </TableLine>
            ))}
          </Table>
        </WrapperFlex>
      </WrapperFlex>
    </ContainerMain>
  );
}
