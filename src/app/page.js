import DomainAdd from '@/Components/Client/DomainAdd'
import DomainList from '@/Components/Server/DomainList'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]/route';

async function getDomains() {

  const session = await getServerSession(authOptions);

  const res = await fetch("http://127.0.0.1:3000/api/domains/fetchDomains", { cache: "no-cache", method: "POST", body: JSON.stringify({ email: session?.user?.email }) });
  const data = await res.json();
  return data;
}

const page = async () => {

  const data = await getDomains();

  return (
    <div className="container">
      <h4 className='mt-4' style={{ color: "gray" }}>Add A NEW DOMAIN</h4>
      <DomainAdd />
      <h4 className='mt-4' style={{ color: "gray" }}>YOUR DOMAINS</h4>
      <h3><b>{data?.result?.length} Domains</b></h3>
      <DomainList domains={data?.result} />
    </div>
  )
}

export default page