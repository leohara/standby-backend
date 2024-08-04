"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabaseServer";

// Studentの型を定義
interface Student {
  id: number;
  name: string;
}

const StudentsList: React.FC = () => {
  const [studentData, setStudentData] = useState<Student[] | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase
        .from('students')
        .select();
      
      console.log(data);
      
      if (error) {
        console.error(error);
        return;
      }

      setStudentData(data);
    };

    // 非同期関数を呼び出す
    fetchStudents();
  }, []);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {studentData.map((student) => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
};

export default StudentsList;
