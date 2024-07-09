"use client"
import React, { useEffect } from "react";
import { fetchRevenue,fetchLatestInvoices  } from '@/app/lib/data';
import axios from 'axios'

export default function Comp1(){
    useEffect(()=>{
        console.log('help!!');
        getData()
        
    },[])
    const getData=async()=>{
        const result = await axios.get('http://jsonplaceholder.typicode.com/posts')
        console.log('result')
    }
    return (
        <div>wew</div>
    )
}