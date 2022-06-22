package org.pixel;

import java.util.stream.Stream;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;

@Path("numbers")
public class NumbersResource {

  @Context HttpServletResponse servletResponse;

  @GET
  public JsonArray numbers() {
    JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
    Stream<String> numberStream =
        Stream.generate(System::currentTimeMillis).map(String::valueOf).limit(10);
    numberStream.forEach(arrayBuilder::add);
    return arrayBuilder.build();
  }
}
