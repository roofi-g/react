export default function Product({ product }) {

  const style_div = {
    margin: '12px 0px',
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <div style={{
      border: '1px solid red',
      padding: '10px'
    }}>
      <div>
        <h3>{ product.name }</h3>
        <p>{ product.description }</p>
        <p>Цена: { product.price } руб</p>
        <p>Количество: { product.available }</p>
      </div>
      <div>
        <div style={ style_div }>
          <label htmlFor="">Новое название:</label>
          <input type="text"/>
        </div>
        <div style={ style_div }>
          <label htmlFor="">Новое описание:</label>
          <input type="text"/>
        </div>
        <div style={ style_div }>
          <label htmlFor="">Цена:</label>
          <input type="text"/>
        </div>
        <div style={ style_div }>
          <label htmlFor="">Количество:</label>
          <input type="text"/>
        </div>
      </div>
      <button>Удалить</button>
      <button>Редактировать</button>
    </div>
  )
}
