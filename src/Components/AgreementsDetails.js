import React from 'react';

const AgreementsDetails = () => {
    return (
        <div>
        <div className="text-5xl font-bold underline text-center mt-10">
            <h1>Open Position</h1>

        </div>
        
            <div class="overflow-x-auto mt-10">
  <table class="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Experience</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Intern (m/f/d) for web design / development in a modern online startup</td>
        <td><a href="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390"><img className='w-50 h-40' src='https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390' onClick="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390" /></a></td>
        <td>senior</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>1</th>
        <td>Intern (m/f/d) for web design / development in a modern online startup</td>
        <td><a href="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390"><img className='w-50 h-40' src='https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390' onClick="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390" /></a></td>
        <td>senior</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>1</th>
        <td>Intern (m/f/d) for web design / development in a modern online startup</td>
        <td><a href="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390"><img className='w-50 h-40' src='https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390' onClick="https://images.template.net/wp-content/uploads/2019/07/Senior-Consultant-Job-Description.jpg?width=390" /></a></td>
        <td>senior</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>  
    );
};

export default AgreementsDetails;