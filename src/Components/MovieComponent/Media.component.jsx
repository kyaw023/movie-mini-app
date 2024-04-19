import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useGetMovieVedioQuery } from "../../store/endpoints/Movie.endpoint";
import VedioSlideComponent from "./VedioSlide.component";

const MediaComponent = ({ vedios }) => {
  return (
    <div className=" mt-10">
      <h1 className=" text-2xl text-slate-100 mb-4">Media</h1>
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className=" bg-secondary-100">
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
          <TabsTrigger value="vedio">Vedios</TabsTrigger>
          <TabsTrigger value="backdrops">Backdrops</TabsTrigger>
          <TabsTrigger value="poster">Posters</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
          <div className=" text-slate-300">Not Avaliable</div>
        </TabsContent>
        <TabsContent value="vedio" className="w-full">
          <div className=" w-full">
            <VedioSlideComponent vedios={vedios} />
          </div>
        </TabsContent>
        <TabsContent value="backdrops">
          <div className=" text-slate-300">Not Avaliable</div>
        </TabsContent>
        <TabsContent value="poster">
          <div className=" text-slate-300">Not Avaliable</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MediaComponent;
