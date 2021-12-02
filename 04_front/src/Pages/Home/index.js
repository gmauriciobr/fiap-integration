import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Select from "react-select"

import { Creators as MetricasActions } from "../../Store/Ducks/metrica"
import { Creators as DroneActions } from "../../Store/Ducks/drone"

import ContainerMain from "../../Components/ContainerMain"
import Table from "../../Components/Table"
import TableHeader from "../../Components/TableHeader"
import TableLine from "../../Components/TableLine"
import { TableValue } from "../../Components/TableValue"
import WrapperFlex from "../../Components/WrapperFlex"
import Button from "../../Components/Button"

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "302px",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "15px",
  }),
}

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data } = useSelector((state) => state.metrica)
  const { data: droneData } = useSelector((state) => state.drone)

  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState(null)

  const handleData = () => {
    const arr = droneData.map((d) => {
      return { value: d.id, label: d.nome }
    })

    setOptions(arr)
  }

  useEffect(() => {
    if (droneData.length) {
      handleData()
    }
  }, [droneData])

  useEffect(() => {
    dispatch(MetricasActions.getMetricaRequest())
    dispatch(DroneActions.getDronesRequest())
  }, [])

  return (
    <ContainerMain>
      <WrapperFlex
        style={{
          maxWidth: "1024px",
          width: "100%",
          justifyContent: "space-between",
          margin: "20px 0",
          alignItems: "center",
        }}
      >
        <Button
          style={{ padding: "10px", width: "200px" }}
          onClick={() => navigate("/create-drone")}
        >
          Cadastrar Drone
        </Button>
        <WrapperFlex style={{ margin: "10px 0" }}>
          <Select
            options={options}
            styles={customStyles}
            placeholder="Selecione o drone"
            onChange={(select) =>
              navigate(`/edit-drone/${select.value}`, { id: select.value })
            }
          />
        </WrapperFlex>
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
              <TableHeader>Latitude</TableHeader>
              <TableHeader>Longitude</TableHeader>
              <TableHeader>Temperatura</TableHeader>
              <TableHeader>Umidade</TableHeader>
              <TableHeader>Drone</TableHeader>
            </tr>
            {data.map((d) => (
              <TableLine>
                <TableValue>{d.latitude}</TableValue>
                <TableValue>{d.longitude}</TableValue>
                <TableValue>{d.temperatura || "-"}</TableValue>
                <TableValue>{d.umidade}</TableValue>
                <TableValue>{d.droneNome}</TableValue>
              </TableLine>
            ))}
          </Table>
        </WrapperFlex>
      </WrapperFlex>
    </ContainerMain>
  )
}
