PGDMP         )            
    z         
   monumentos    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398 
   monumentos    DATABASE     }   CREATE DATABASE monumentos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE monumentos;
                postgres    false            ?            1259    16400 	   monumento    TABLE     ?  CREATE TABLE public.monumento (
    monument_id bigint NOT NULL,
    codigo_pais character varying DEFAULT ''::character varying NOT NULL,
    nombre_pais character varying DEFAULT ''::character varying NOT NULL,
    codigo_ciudad character varying DEFAULT ''::character varying NOT NULL,
    longitud character varying DEFAULT ''::character varying NOT NULL,
    latitud character varying DEFAULT ''::character varying NOT NULL,
    nombre_monumento character varying DEFAULT ''::character varying NOT NULL,
    descripcion character varying DEFAULT ''::character varying NOT NULL,
    url_foto character varying DEFAULT ''::character varying NOT NULL
);
    DROP TABLE public.monumento;
       public         heap    postgres    false            ?            1259    16399    monumento_monument_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.monumento_monument_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.monumento_monument_id_seq;
       public          postgres    false    215                       0    0    monumento_monument_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.monumento_monument_id_seq OWNED BY public.monumento.monument_id;
          public          postgres    false    214            e           2604    16403    monumento monument_id    DEFAULT     ~   ALTER TABLE ONLY public.monumento ALTER COLUMN monument_id SET DEFAULT nextval('public.monumento_monument_id_seq'::regclass);
 D   ALTER TABLE public.monumento ALTER COLUMN monument_id DROP DEFAULT;
       public          postgres    false    214    215    215            ?          0    16400 	   monumento 
   TABLE DATA           ?   COPY public.monumento (monument_id, codigo_pais, nombre_pais, codigo_ciudad, longitud, latitud, nombre_monumento, descripcion, url_foto) FROM stdin;
    public          postgres    false    215   ?                  0    0    monumento_monument_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.monumento_monument_id_seq', 4, true);
          public          postgres    false    214            o           2606    16415 (   monumento PK_1189604c83e1504cd9b999c2704 
   CONSTRAINT     q   ALTER TABLE ONLY public.monumento
    ADD CONSTRAINT "PK_1189604c83e1504cd9b999c2704" PRIMARY KEY (monument_id);
 T   ALTER TABLE ONLY public.monumento DROP CONSTRAINT "PK_1189604c83e1504cd9b999c2704";
       public            postgres    false    215            ?      x?3?4?? .cӄ?Ύ???? 9??     