import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Select from "react-select"

import { Creators as MetricaActions } from "../../Store/Ducks/metrica"
import { Creators as DroneActions } from "../../Store/Ducks/drone"

import ContainerMain from "../../Components/ContainerMain"
import Title from "../../Components/Title"
import Form from "../../Components/Form"
import Input from "../../Components/Input"
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

export default function CreateDrone() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data } = useSelector((state) => state.drone)
  const { loading, success, hasError } = useSelector((state) => state.metrica)

  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [temperatura, setTemperatura] = useState(0)
  const [umidade, setUmidade] = useState(0)
  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState(null)
  const [showError, setShowError] = useState(false)

  const handleData = () => {
    const arr = data.map((d) => {
      return { value: d.id, label: d.nome }
    })

    setOptions(arr)
  }

  const handleSubmit = () => {
    dispatch(
      MetricaActions.postMetricaRequest({
        droneId: selected,
        latitude,
        longitude,
        temperatura,
        umidade,
      })
    )
  }

  useEffect(() => {
    if (!loading && success) {
      navigate("/")
    }
  }, [loading, success])

  useEffect(() => {
    if (data.length) {
      handleData()
    }
  }, [data])

  useEffect(() => {
    if (!loading && hasError) {
      setShowError(!showError)
    }
  }, [loading, hasError])

  useEffect(() => {
    dispatch(DroneActions.getDronesRequest())
  }, [])

  return (
    <ContainerMain>
      <Title>Criar Metrica</Title>
      <Form onSubmit={() => console.log("")}>
        <WrapperFlex style={{ margin: "10px 0" }}>
          <Select
            options={options}
            styles={customStyles}
            placeholder="Selecione o drone"
            onChange={(select) => setSelected(select.value)}
          />
        </WrapperFlex>
        <Input
          placeholder="Insira a latitude"
          onChange={(e) => setLatitude(e.target.value)}
        />
        <Input
          placeholder="Insira a longitude"
          onChange={(e) => setLongitude(e.target.value)}
        />
        <Input
          placeholder="Insira a temperatura"
          onChange={(e) => setTemperatura(Number(e.target.value))}
        />
        <Input
          placeholder="Insira a umidade"
          onChange={(e) => setUmidade(Number(e.target.value))}
        />
      </Form>
      {showError && (
        <span style={{ color: "red", weight: 900, margin: "10px 0" }}>
          Ops! Algo deu errado, tente novamente mais tarde.
        </span>
      )}
      <WrapperFlex
        style={{ width: "100%", justifyContent: "center", margin: "15px 0" }}
      >
        <Button
          style={{ width: "100%", maxWidth: "302px" }}
          onClick={() => handleSubmit()}
        >
          Salvar
        </Button>
      </WrapperFlex>
    </ContainerMain>
  )
}
