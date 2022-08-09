import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const navegate = useNavigate()

  const [name, useName] = useState('')
  const [email, useEmail] = useState('')

  const [createSubscriber, { loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscriber(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navegate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border rounded border-gray-500">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rou px-4 h-14"
              placeholder="Seu nome completo" 
              type="text"
              onChange={event => useName(event?.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-4 h-14"
              placeholder="Digite seu email"
              type="email"
              onChange={event => useEmail(event?.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>

      </div>

      <img src="/src/assets/group-images.png" className="mt-10" alt="" />
    </div>
  )
}