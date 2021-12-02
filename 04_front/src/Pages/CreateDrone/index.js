import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Creators as DroneActions } from "../../Store/Ducks/drone"

import ContainerMain from "../../Components/ContainerMain"
import Title from "../../Components/Title"
import Form from "../../Components/Form"
import Input from "../../Components/Input"
import Toggle from "../../Components/Toggle"
import WrapperFlex from "../../Components/WrapperFlex"
import Button from "../../Components/Button"

export default function CreateDrone() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, hasError, success } = useSelector((state) => state.drone)

  const [name, setName] = useState("")
  const [rastreavel, setRastreavel] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleCreate = () => {
    dispatch(DroneActions.postDroneRequest({ nome: name, rastreavel }))
  }

  useEffect(() => {
    if (!loading && success) {
      navigate("/")
    }
  }, [loading, success])

  useEffect(() => {
    console.log(hasError)
    if (!loading && hasError) {
      setShowError(!showError)
    }
  }, [loading, hasError])

  return (
    <ContainerMain>
      <Title>Criar Drone</Title>
      <Form onSubmit={() => console.log("")}>
        <Input
          placeholder="Insira o nome do drone"
          onChange={(e) => setName(e.target.value)}
        />
        <WrapperFlex style={{ alignItems: "center" }}>
          <span style={{ color: "#fff", marginRight: "10px" }}>
            Drone será rastreável?
          </span>
          <Toggle handleCheck={() => setRastreavel(!rastreavel)} />
        </WrapperFlex>
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
          onClick={() => handleCreate()}
        >
          Salvar
        </Button>
      </WrapperFlex>
    </ContainerMain>
  )
}
