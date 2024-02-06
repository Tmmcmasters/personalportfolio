import createSupabaseServerCleint from "@/lib/supabase"


export async function CreateContact({
    email,
    firstName,
    lastName,
    company,
    phoneNumber,
    message
}: {
    email: string
    firstName: string
    lastName: string | undefined | null
    company: string | undefined | null
    phoneNumber: string | undefined | null
    message: string | undefined | null
}) {

    const supabase = await createSupabaseServerCleint();

    const { data, error } = await supabase
        .from('ContactMe')
        .insert([
            {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                Company: company,
                PhoneNumber: phoneNumber,
                Message: message
            }
        ])
    
    return { data, error }
}