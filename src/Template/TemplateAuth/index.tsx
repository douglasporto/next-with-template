import { ReactNode } from 'react'
import * as S from './styles'

type TemplateAuthProps = {
  children: ReactNode
}
export default function TemplateAuth({ ...props }: TemplateAuthProps) {
  return (
    <>
      <S.Wrapper>
        <h1>TemplateAuth</h1>
        {props.children}
      </S.Wrapper>
      <footer>Footer</footer>
    </>
  )
}
