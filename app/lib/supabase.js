import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@env';
import { createClient } from '@supabase/supabase-js';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Brak wymaganych zmiennych środowiskowych SUPABASE_URL lub SUPABASE_ANON_KEY');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Funkcje pomocnicze dla autoryzacji
export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { data, error };
};

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
};

// Funkcje pomocnicze dla danych użytkownika
export const getUserProfile = async (userId) => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    return { data, error };
};

// Funkcje pomocnicze dla lekcji
export const getUpcomingLessons = async (userId, role) => {
    let query = supabase
        .from('lessons')
        .select('*')
        .gte('date', new Date().toISOString())
        .order('date', { ascending: true });

    if (role === 'teacher') {
        query = query.eq('teacher_id', userId);
    } else if (role === 'parent') {
        query = query.eq('student_id', userId);
    }

    const { data, error } = await query;
    return { data, error };
};

// Funkcje pomocnicze dla zadań domowych
export const getHomework = async (userId, role) => {
    let query = supabase
        .from('homework')
        .select('*')
        .order('due_date', { ascending: true });

    if (role === 'teacher') {
        query = query.eq('teacher_id', userId);
    } else if (role === 'parent') {
        query = query.eq('student_id', userId);
    }

    const { data, error } = await query;
    return { data, error };
};

// Funkcje pomocnicze dla ocen
export const getGrades = async (studentId) => {
    const { data, error } = await supabase
        .from('grades')
        .select('*')
        .eq('student_id', studentId)
        .order('date', { ascending: false });
    return { data, error };
};

// Funkcje pomocnicze dla nieobecności
export const reportAbsence = async (studentId, date, reason) => {
    const { data, error } = await supabase
        .from('absences')
        .insert([
            {
                student_id: studentId,
                date,
                reason,
                status: 'pending'
            }
        ]);
    return { data, error };
};

// Funkcja pobierająca wszystkich rodziców i ich dzieci
export const getParentsWithChildren = async () => {
    const { data, error } = await supabase
        .from('profiles')
        .select('id, name, students(id, name, class, level)')
        .eq('role', 'parent');
    return { data, error };
}; 