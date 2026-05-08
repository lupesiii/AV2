## Requisitos

Nodejs

## Como executar

Clone o repositório:

```
git clone https://github.com/lupesiii/AV2.git
cd AV2
```

Instale as dependências:

```
npm install
```

Inicie a aplicação no modo desenvolvimento:

```
npm run dev
```

## Do acesso ao sistema

Existem três níveis de acesso já disponíveis para serem utilizados no sistema quando ele é iniciado a fim de facilitar o entendimento do que cada nível pode ter acesso. São os usuários para teste:

```
usuario: op
senha: op
nivel: operador
```

```
usuario: eng
senha: eng
nivel: engenheiro
```

```
usuario: admin
senha: admin
nivel: administrador
```

## Do nível de acesso dos usuários

Cada usuário tem suas limitações dentro do sistema, como páginas inteiras que não podem ser acessadas ou elementos específicos do site, como botões, por exemplo. Isso pode ser conferido com melhor detalhamento através do user-flow do projeto, disponibilizado em: <a href="https://miro.com/app/board/uXjVJOtoMn8=/?share_link_id=648779581065">user-flow</a>.

## Do que foi utilizado

Para desenvolver a interface do sistema foram utilizados React e JavaScript. Para navegação visando uma "SPA", React-Router. Para estilização e responsividade, Tailwindcss.

## Dos demais detalhes

Para maior detalhamento sobre o projeto, como objetivo, requisitos funcionais e hierarquia de informações, consulte a documentação completa: <a href="https://github.com/lupesiii/AV2/blob/main/docs/Aerocode%20-%20Documenta%C3%A7%C3%A3o.pdf">Documentação Aerocode</a>
