export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  isPrivate: boolean;
  readingTime: number;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-frontend-architecture",
    title: "Membangun Arsitektur Frontend yang Scalable untuk Project Nyata",
    excerpt:
      "Pengalaman menyusun struktur folder, reusable components, dan flow data agar project React tetap rapi saat fitur terus bertambah.",
    content: `
# Membangun Arsitektur Frontend yang Scalable untuk Project Nyata

Ketika project masih kecil, struktur sederhana terasa cukup. Tapi begitu fitur bertambah, tanpa arsitektur yang jelas kode akan cepat berantakan.

## Struktur Folder yang Saya Gunakan

\`\`\`
src/
 ├── components/
 ├── features/
 │    └── users/
 │         ├── components/
 │         ├── hooks/
 │         ├── services/
 │         └── types.ts
 ├── hooks/
 ├── services/
 ├── utils/
 └── pages/
\`\`\`

Struktur ini memisahkan UI, logic, dan API sehingga mudah di-scale.

## Flow Data

\`\`\`
UI Component → Custom Hook → Service Layer → REST API
\`\`\`

## Contoh Custom Hook

\`\`\`ts
export const useUsers = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await userService.getAll();
      setData(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, loading };
};
\`\`\`

Dengan pendekatan ini, component tetap bersih dan reusable.
    `,
    publishedAt: "2026-01-10",
    tags: ["React", "Architecture", "Clean Code"],
    isPrivate: true,
    readingTime: 7,
  },
  {
    id: "2",
    slug: "integrating-rest-api-in-frontend",
    title: "Best Practice Integrasi REST API di Frontend",
    excerpt:
      "Cara menangani loading state, error handling, dan struktur service layer agar integrasi API lebih maintainable.",
    content: `
# Best Practice Integrasi REST API di Frontend

Integrasi API bukan hanya fetch data lalu render.

## Service Layer Pattern

\`\`\`ts
// services/user.service.ts
import axios from "axios";

export const userService = {
  getAll: () => axios.get("/api/users"),
  getById: (id: string) => axios.get(\`/api/users/\${id}\`),
};
\`\`\`

UI tidak langsung memanggil axios.

## Flow Integrasi

\`\`\`
Component → useUsers() → userService → API
\`\`\`

## Handling State

\`\`\`tsx
if (loading) return <Spinner />;
if (!data.length) return <EmptyState />;
\`\`\`

Selalu sediakan loading, error, dan empty state untuk UX yang jelas.
    `,
    publishedAt: "2026-01-22",
    tags: ["REST API", "React", "Frontend"],
    isPrivate: true,
    readingTime: 6,
  },
  {
    id: "3",
    slug: "responsive-design-real-project",
    title: "Responsive Design di Project Nyata: Bukan Sekadar Media Query",
    excerpt:
      "Pendekatan mobile-first, testing device nyata, dan cara menjaga layout tetap konsisten di berbagai ukuran layar.",
    content: `
# Responsive Design di Project Nyata: Bukan Sekadar Media Query

Responsive design bukan hanya menambahkan breakpoint.

## Mobile First CSS

\`\`\`css
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}
\`\`\`

## Layout Strategy

\`\`\`
Mobile → Single column
Tablet → Grid 2 column
Desktop → Grid + Sidebar
\`\`\`

## Gunakan Flex & Grid

\`\`\`css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
\`\`\`

Hindari fixed width agar layout tetap fleksibel.
    `,
    publishedAt: "2026-02-01",
    tags: ["Responsive Design", "CSS", "Frontend"],
    isPrivate: true,
    readingTime: 5,
  },
  {
    id: "4",
    slug: "mentoring-junior-developers",
    title: "Pengalaman Mentoring Intern Frontend Developer",
    excerpt:
      "Apa yang efektif saat membimbing intern: code review, task breakdown, dan standar clean code.",
    content: `
# Pengalaman Mentoring Intern Frontend Developer

Mentoring bukan hanya memberi task, tapi membangun cara berpikir.

## Alur Mentoring

\`\`\`
Task → Diskusi Requirement → Breakdown → Implementasi → Code Review → Refactor
\`\`\`

## Contoh Feedback Code

Sebelum:

\`\`\`ts
const data = await axios.get("/api/users");
setUsers(data.data);
\`\`\`

Sesudah:

\`\`\`ts
const fetchUsers = async () => {
  try {
    const res = await userService.getAll();
    setUsers(res.data);
  } catch (error) {
    console.error(error);
  }
};
\`\`\`

Intern belajar:
- separation of concern
- error handling
- clean structure

## Guideline yang Saya Terapkan
- Komponen maksimal 150–200 baris
- Hindari logic bisnis di JSX
- Gunakan custom hook untuk state kompleks
    `,
    publishedAt: "2026-02-10",
    tags: ["Career", "Mentoring", "Teamwork"],
    isPrivate: true,
    readingTime: 6,
  },
  {
    id: "5",
    slug: "frontend-in-healthcare-system",
    title: "Tantangan Mengembangkan Frontend untuk Sistem Kesehatan",
    excerpt:
      "Belajar dari pengembangan electronic document system: struktur data kompleks, validasi, dan reliability.",
    content: `
# Tantangan Mengembangkan Frontend untuk Sistem Kesehatan

Frontend di sistem kesehatan berbeda dengan landing page.

## Struktur Form Dinamis

\`\`\`
Patient Data
 ├── Identity
 ├── Vital Signs
 ├── Diagnosis
 └── Medical Notes
\`\`\`

Setiap section memiliki validasi dan state sendiri.

## Contoh Vue Form Handling

\`\`\`vue
<script setup>
import { ref } from "vue";

const form = ref({
  patientName: "",
  diagnosis: "",
});

const submitForm = () => {
  if (!form.value.patientName) return alert("Required");
  // kirim ke API
};
</script>
\`\`\`

## Prioritas Utama
- Tidak boleh error saat input
- Validasi harus jelas
- Data tidak boleh hilang

## Flow Data Dokumen

\`\`\`
Form Input → Validation → Transform Payload → API → Success State
\`\`\`

Reliability lebih penting daripada animasi atau visual kompleks.
    `,
    publishedAt: "2026-02-15",
    tags: ["Healthcare", "Vue", "Frontend"],
    isPrivate: true,
    readingTime: 7,
  },
];
