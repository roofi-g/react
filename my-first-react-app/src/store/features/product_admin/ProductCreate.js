export default function ProductCreate() {

  const style_div = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  }
  return (
    <div style={{
      width: '350px',
      border: '1px solid red',
      margin: 'auto',
      padding: '20px'
    }}>
      <h2>Данные нового продукта</h2>
      <form action="">
        <div style={style_div}>
          <label>Название товара:</label>
          <input type="text"/>
        </div>
        <div style={style_div}>
          <label>Описание товара:</label>
          <input type="text"/>
        </div>
        <div style={style_div}>
          <label>Цена:</label>
          <input type="text"/>
        </div>
        <div style={style_div}>
          <label>Количество:</label>
          <input type="text"/>
        </div>
        <button>Добавить в каталог</button>
      </form>
    </div>
  )
}
