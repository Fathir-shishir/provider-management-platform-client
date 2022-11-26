import React from 'react';

const AgreementsDetailsRow = ({index, detail}) => {
    const {name,type} = detail
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{type}</td>
        <td>
            <label for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
        </td>
    </tr>
    );
};

export default AgreementsDetailsRow;