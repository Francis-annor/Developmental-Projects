import { createRoot } from 'react-dom/client'

const myelement = (
    <table>
      <tr>
        <th>Names</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

createRoot(document.getElementById('root')).render(
  myelement
)
